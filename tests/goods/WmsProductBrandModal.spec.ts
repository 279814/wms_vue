import { mapBrandRecordToFormValues } from '/@/views/goods/WmsProductBrand.form';

describe('mapBrandRecordToFormValues', () => {
  it('keeps editable fields and prefixes relative logo paths', () => {
    expect(
      mapBrandRecordToFormValues(
        {
          id: 'brand-1',
          name: '阿里巴巴',
          status: '1',
          logo: '/files/brand.png',
        },
        'http://localhost:8080'
      )
    ).toEqual({
      id: 'brand-1',
      name: '阿里巴巴',
      status: '1',
      logo: 'http://localhost:8080/files/brand.png',
    });
  });

  it('leaves empty and absolute logos unchanged', () => {
    expect(mapBrandRecordToFormValues({ logo: '' }, 'http://localhost:8080')).toEqual({ logo: '' });
    expect(mapBrandRecordToFormValues({ logo: 'http://cdn.example.com/brand.png' }, 'http://localhost:8080')).toEqual({
      logo: 'http://cdn.example.com/brand.png',
    });
  });
});
