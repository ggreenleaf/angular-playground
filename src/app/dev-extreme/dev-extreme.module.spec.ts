import { DevExtremeModule } from './dev-extreme.module';

describe('DevExtremeModule', () => {
  let devExtremeModule: DevExtremeModule;

  beforeEach(() => {
    devExtremeModule = new DevExtremeModule();
  });

  it('should create an instance', () => {
    expect(devExtremeModule).toBeTruthy();
  });
});
