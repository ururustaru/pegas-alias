import React, { JSXElementConstructor, ReactElement } from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SignUp } from '../pages/sign-up';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { unmountComponentAtNode } from 'react-dom';

describe('Register', () => {
/*
    it('click Registration', async () => {
    act( () => {
        const { unmount } = render(
            <BrowserRouter>
                <Routes>   
                    <Route path="*" element = {<SignUp/>}/>
                </Routes>
            </BrowserRouter>);

        const regBtn = document.querySelector('[title="Создать аккаунт"]');

        act(() => {
            fireEvent.click(regBtn!);
        })

        unmount()
        render(<BrowserRouter><Routes><Route path="*" element= {<SignUp/>}/></Routes></BrowserRouter>)
        expect(screen.findAllByText('Заполните поле')).toBe(0);

//            let err = screen.findByText('Заполните поле');
//            console.log("err", err);
        const infos = document.querySelectorAll(".form-field__info");
        let checked = false;
        infos.forEach(element => {
        console.log("element", element.outerHTML);
            if (element.textContent == 'Заполните поле') {
                checked = true;
            }
        });

    })

        const infos = document.querySelectorAll(".form-field__info");
        let checked = false;
        infos.forEach(element => {
        console.log("element", element.outerHTML);
            if (element.textContent == 'Заполните поле') {
                checked = true;
            }
        });
//        expect(getByText('Заполните поле')).toBeInTheDocument();        
        expect(checked).toBe(true);
    });
*/

    it('click Registration', () => {
        let Unmount = function() {};
        let ReRender = function(ui: ReactElement<any, string | JSXElementConstructor<any>>) {};
        act(() => {
            const { unmount, rerender } = render(
            <BrowserRouter>
                <Routes>   
                    <Route path="*" element= {<SignUp/>}/>
                </Routes>
            </BrowserRouter>);
            Unmount = unmount;
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
        const test = screen.findAllByText('Заполните поле');
    }); 


    it('click Authorization', () => {
        act(() => {
            const { container } = render(
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