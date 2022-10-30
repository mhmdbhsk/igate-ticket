import airtable from 'airtable';

airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
});

const airtableBase = airtable.base(
  process.env.NEXT_PUBLIC_AIRTABLE_BASE as string
);

export default airtableBase;
