import chai from 'chai'
import sinon from 'sinon'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

function setupEnzyme16(){
  Enzyme.configure({ adapter: new Adapter() });
}

setupEnzyme16()

global.expect = chai.expect;
global.sinon = sinon;
global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};




