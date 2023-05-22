function nformat(number: number, options: Intl.NumberFormatOptions = {}) {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 1,
    ...options,
    style: 'decimal',
  }).format(number);
}

export default nformat;
