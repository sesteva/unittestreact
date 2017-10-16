import React from 'react'
import ComponentA from '../../src/Components/ComponentA.js'
import {shallow} from 'enzyme'

describe('App', ()=>{

  it('should test app exists', ()=>{
    const wrapper = shallow(<ComponentA/>)
    expect(wrapper.text()).to.equal('ComponentA')
  })

})