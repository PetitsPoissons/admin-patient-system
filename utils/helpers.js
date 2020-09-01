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
  }
}
