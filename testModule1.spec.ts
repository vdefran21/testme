import { theFunction, callTheFunction } from './module';
describe('module tests', () => {
    it('thingy', async () => {
        callTheFunction('a');
        expect(theFunction).toHaveBeenCalled();
        expect(theFunction).toHaveBeenCalledWith('a');
    });
});
