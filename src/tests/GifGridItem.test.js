import React from 'react'
import {shallow} from 'enzyme'
import { GifGridItem } from '../components/GifGridItem';


describe('Pruebas GifGridItem', () => { 

    

    test('debe funcionar bien la app de gifgriditem', () => { 
        let wrapper = shallow(< GifGridItem />); // de esta forma no pierdo los atributos de la funcion
        expect(wrapper).toMatchInlineSnapshot();

    })

    

 })

