import AztecScan from '..';

test('AztecScan', () => {
  const aztecScan = new AztecScan();
  expect(aztecScan).toBeInstanceOf(AztecScan);

  aztecScan.enumerateDevices().then((devices) => {
    expect(devices).toBeDefined();
  });
});
