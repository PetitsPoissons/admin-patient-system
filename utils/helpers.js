module.exports = {
  format_date: date => {
    const d = new Date(date);
    let month = d.getMonth() + 1;
    if (month < 10) {
      month = `0${month}`;
    }
    let day = d.getDate();
    if (day < 10) {
      day = `0${day}`;
    }
    return `${new Date(date).getFullYear()}-${month}-${day}`;
  },
  format_phone: phone => {
    return `${phone.replace('-', '')}`;
  },
  format_plural: (word, amount) => {
    if (amount > 1) {
      return `${word}s`;
    }
    return word;
  },
  format_ssn: val => {
    val = val.replace(/\D/g, '');
    val = val.replace(/^(\d{3})/, '$1-');
    val = val.replace(/-(\d{2})/, '-$1-');
    val = val.replace(/(\d)-(\d{4}).*/, '$1-$2');
    return val;         // val="135711458" ==> "135-71-1458"
  }
}
