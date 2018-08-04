import { InstrumentsRoutingModule } from './instruments-routing.module';

describe('InstrumentsRoutingModule', () => {
  let instrumentsRoutingModule: InstrumentsRoutingModule;

  beforeEach(() => {
    instrumentsRoutingModule = new InstrumentsRoutingModule();
  });

  it('should create an instance', () => {
    expect(instrumentsRoutingModule).toBeTruthy();
  });
});
