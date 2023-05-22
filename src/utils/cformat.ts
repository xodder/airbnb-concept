function cformat(amount: number, options: Intl.NumberFormatOptions = {}) {
  if (amount === undefined) {
    return undefined;
  }

  return new Intl.NumberFormat('en-US', {
    currency: 'USD',
    minimumFractionDigits: 0,
    ...options,
    style: 'currency',
  }).format(amount);
}

export default cformat;
