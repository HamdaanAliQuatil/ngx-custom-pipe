import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToWords'
})
export class NumberToWordsPipe implements PipeTransform {

  transform(value: unknown, region: string): unknown {
    if (typeof value !== 'number') {
      return null; // Return null if the input value is not a number
    }

    let scaleWords: string[] = [];

    if (region === 'INR') {
      scaleWords = ['', 'thousand', 'lakhs', 'crores'];
    } else {
      scaleWords= ['', 'thousand', 'million', 'billion', 'trillion'];
    }
    if (value === 0) {
      return 'zero'; // Special case for zero
    }

    // Split the number into groups of three digits from right to left
    const groups: number[] = [];

    if (region === 'INR') {
      groups.push((value as number) % 1000);
      value = Math.floor((value as number) / 1000);
    }

    while ((value as number) > 0) {
      groups.push((value as number) % (region === 'INR' ? 100 : 1000));
      value = Math.floor((value as number) / (region === 'INR' ? 100 : 1000));
    }

    // Convert each group to words and concatenate with the appropriate scale word
    const result: string[] = [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const group = groups[i];
      if (group > 0) {
        result.push(this.convertGroupToWords(group) + ' ' + scaleWords[i]);
      }
    }

    return result.join(' ').trim(); // Join the words and remove leading/trailing whitespace
  }

  private convertGroupToWords(group: number): string {
    const numberWords: string[] = [
      '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
      'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
      'eighteen', 'nineteen'
    ];
    const tensWords: string[] = [
      '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];

    const hundreds = Math.floor(group / 100);
    const tens = Math.floor((group % 100) / 10);
    const ones = group % 10;

    let result = '';

    if (hundreds > 0) {
      result += numberWords[hundreds] + ' hundred';
    }

    if (tens === 1) {
      result += (result !== '' ? ' ' : '') + numberWords[10 + ones];
    } else {
      if (tens > 0) {
        result += (result !== '' ? ' ' : '') + tensWords[tens];
      }

      if (ones > 0) {
        result += (result !== '' ? ' ' : '') + numberWords[ones];
      }
    }

    return result;
  }

}
