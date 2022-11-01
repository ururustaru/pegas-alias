import React, { JSXElementConstructor, ReactElement } from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SignUp } from '../pages/sign-up';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

describe('Register', () => {

    it('click Registration', () => {
        let ReRender = function(_ui: ReactElement<any, string | JSXElementConstructor<any>>) { 
            // type global Rerender
        };
        act(() => {
            const { rerender } = render(
            <BrowserRouter>
                <Routes>   
                    <Route path="*" element= {<SignUp/>}/>
                </Routes>
            </BrowserRouter>);
            ReRender = rerender;
        });
        const regBtn = document.querySelector('[title="Создать аккаунт"]');
        act(() => {
            fireEvent.click(regBtn!);
        });
        ReRender(<BrowserRouter>
            <Routes>   
                <Route path="*" element= {<SignUp/>}/>
            </Routes>
        </BrowserRouter>);
        
        screen.debug();
            /* проверять появляется предупреждение о пустых полях */
        screen.findAllByText('Заполните поле');
    }); 


    it('click Authorization', () => {
        act(() => {
            render(
            <BrowserRouter>
                <Routes>   
                    <Route path="*" element= {<SignUp/>}/>
                </Routes>
            </BrowserRouter>);
        });
        const authBtn = document.querySelector('[title="Уже есть аккаунт ?"]');
        act(() => {
            fireEvent.click(authBtn!);
        })
        expect(window.location.pathname).toBe("/login");
    }); 
});