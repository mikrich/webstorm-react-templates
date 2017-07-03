#set($componentName = "")
#set($componentTitle = "")
#foreach($str in $Component.split("-"))
  #set($str= $str.substring(0,1).toUpperCase()+$str.substring(1))
  #set($strLc = $str.substring(0,1).toLowerCase()+$str.substring(1))
  #set($componentName = $componentName + $str)
  #set($componentTitle = $componentTitle + $strLc + ' ')
#end
import React from 'react';
import mockStore from 'redux-mock-store';

import { shallow } from 'enzyme';
import ${componentName} from './${NAME}';

describe('${componentName}', () => {
  const initialState = {};
  const wrapper = shallow(
    <${componentName} />#[[$END$]]#,
    { context: { store: mockStore(initialState) } }
  );

  it('should render ${componentTitle} correctly', () => {
    expect(wrapper.dive().find('${componentName}').dive()).toMatchSnapshot();
  });
});
