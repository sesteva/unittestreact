import Calculator from '../../src/Utils/Calculator'

describe('Calculator', ()=>{

  it('Add', ()=>{
    const expected = 3
    const result = Calculator.add(1,2)
    expect(result).to.equal(expected)
  })

})