
import { cityData } from '../data/cities';
import { formatCities } from '../lib/munge-utils';



describe('API City Munging', () => {

  const expectedCities = [
    {
      'formatted_query': 'Reno, Washoe County, Nevada, USA',
      'latitude': '39.5261206',
      'longitude': '-119.8126581'
    },
    {
      'formatted_query': 'Branson, Taney County, Missouri, USA',
      'latitude': '36.6411357',
      'longitude': '-93.2175285'
    },
    {
      'formatted_query': 'Hell, Putnam Township, Livingston County, Michigan, 48169, USA',
      'latitude': '42.4347571',
      'longitude': '-83.9849477'
    }
  ];

  it('munges city data', async () => {
    const output = formatCities(cityData);

    expect(output).toEqual(expectedCities);
  });

});