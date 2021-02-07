import { HourfromdatePipe } from './hourfromdate.pipe';

describe('HourfromdatePipe', () => {
  it('create an instance', () => {
    const pipe = new HourfromdatePipe('2020-11-11');
    expect(pipe).toBeTruthy();
  });
});
