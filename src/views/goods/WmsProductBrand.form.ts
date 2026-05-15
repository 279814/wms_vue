export function mapBrandRecordToFormValues(record: Record<string, any> = {}, viewUrl = '') {
  const logo = record.logo;

  if (!logo || /^https?:\/\//i.test(logo)) {
    return {
      ...record,
      logo,
    };
  }

  return {
    ...record,
    logo: `${viewUrl}${logo}`,
  };
}
