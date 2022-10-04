import * as module from './module';

describe('module tests', () => {
  it('test the function was called with specific parameters', async () => {
    const theFunctionSpy = jest.spyOn(module, 'theFunction');
    module.callTheFunction('a');
    expect(theFunctionSpy).toHaveBeenCalled();
    expect(theFunctionSpy).toHaveBeenCalledWith('a');
  });
});
