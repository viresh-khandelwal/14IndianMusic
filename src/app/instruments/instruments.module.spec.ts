import { InstrumentsModule } from './instruments.module';

describe('InstrumentsModule', () => {
  let instrumentsModule: InstrumentsModule;

  beforeEach(() => {
    instrumentsModule = new InstrumentsModule();
  });

  it('should create an instance', () => {
    expect(instrumentsModule).toBeTruthy();
  });
});
