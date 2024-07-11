import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'piiMask'
})
export class PiiMaskerPipe implements PipeTransform {

  transform(value: string, type: string, options?: any): string {
    if (typeof value !== 'string') {
      // Return the value unchanged if it is not a string
      return value; 
    }

    const maskChar = options?.maskChar || '*';
    const unmaskedCount = options?.unmaskedCount || 4;

    switch (type) {
      case 'full':
        return this.fullMask(value, maskChar);
      case 'partial':
        return this.partialMask(value, maskChar, unmaskedCount);
      case 'email':
        return this.emailMask(value, maskChar);
      case 'phone':
        return this.phoneMask(value, maskChar, unmaskedCount);
      case 'regex':
        return this.regexMask(value, options?.pattern, maskChar);
      case 'custom':
        return options?.customFunction ? options.customFunction(value, maskChar) : value;
      default:
        // Return the value unchanged if type is not recognized.
        // TODO: Explore the possibility of throwing an error instead.
        return value;
    }
  }

  private fullMask(value: string, maskChar: string): string {
    return maskChar.repeat(value.length);
  }

  private partialMask(value: string, maskChar: string, unmaskedCount: number): string {
    const maskedCount = value.length - unmaskedCount;
    return maskChar.repeat(maskedCount) + value.slice(maskedCount);
  }

  private emailMask(value: string, maskChar: string): string {
    //TODO: Read more standards for email masking
    const [localPart, domain] = value.split('@');
    const maskedLocalPart = localPart[0] + maskChar.repeat(localPart.length - 2) + localPart.slice(-1);
    return maskedLocalPart + '@' + domain;
  }

  private phoneMask(value: string, maskChar: string, unmaskedCount: number): string {
    const maskedCount = value.length - unmaskedCount;
    return maskChar.repeat(maskedCount) + value.slice(maskedCount);
  }

  private regexMask(value: string, pattern: RegExp, maskChar: string): string {
    return value.replace(pattern, (match) => maskChar.repeat(match.length));
  }
}
