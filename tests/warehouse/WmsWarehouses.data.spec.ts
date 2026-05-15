import { formSchema } from '../../src/views/warehouse/WmsWarehouses.data';

describe('WmsWarehouses form schema', () => {
  test('status field is disabled', () => {
    const statusField = formSchema.find((item) => item.field === 'status');
    const componentProps = statusField?.componentProps as Record<string, unknown> | undefined;

    expect(statusField).toBeDefined();
    expect(componentProps?.disabled).toBe(true);
  });
});
