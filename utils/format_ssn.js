function formatSocialSecurity(val){
	val = val.replace(/\D/g, '');
	val = val.replace(/^(\d{3})/, '$1-');
	val = val.replace(/-(\d{2})/, '-$1-');
	val = val.replace(/(\d)-(\d{4}).*/, '$1-$2');
	return val;
}  		
formatSocialSecurity("135711458");//"135-71-1458"

module.exports = { formatSocialSecurity };