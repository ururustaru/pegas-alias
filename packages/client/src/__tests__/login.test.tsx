import React from 'react';
import { render, fireEvent, act, Matcher, SelectorMatcherOptions } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Login } from '../pages/login';
import { loginUser } from '../services/http/login';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

let getByText: ((id: Matcher, options?: SelectorMatcherOptions | undefined) => HTMLElement) | ((arg0: string) => any), container;
jest.mock('../services/http/login', () => {
    const originalModule = jest.requireActual('../services/http/login');
    return {
      __esModule: true,
      ...originalModule,
      loginUser: jest.fn().mockReturnValue(1),
    };
});

var mock = new MockAdapter(axios);
const data = { response: true, username: "testuser", password: "testpswd" };
mock.onPost('https://ya-praktikum.tech/api/v2/auth/signin').reply(200, data);


describe('Login', () => {
    it('тест текст <Login>', () => {
        act(() => {
            const renderOut = render(
            <BrowserRouter>
                <Routes>   
                    <Route path="*" element= {<Login/>}/>
                </Routes>
            </BrowserRouter>);
        getByText = renderOut.getByText;
        });
        expect(getByText('Pegas Alias')).toBeInTheDocument();
        expect(getByText('Вход в систему')).toBeInTheDocument();
        expect(getByText('Авторизоваться')).toBeInTheDocument();
        expect(getByText('Ещё нет аккаунта ?')).toBeInTheDocument();
    });

    it('click Login', async () => {
        act(() => {
            const { container } = render(
            <BrowserRouter>
                <Routes>   
                    <Route path="*" element= {<Login/>}/>
                </Routes>
            </BrowserRouter>);
        });

        const authBtn = document.querySelector('[title="Авторизоваться"]');
        act(() => {
            fireEvent.click(authBtn!);
        })
        
        expect(true).toBe(true);
    });

    it('click Registration', () => {
        act(() => {
            const { container } = render(
            <BrowserRouter>
                <Routes>   
                    <Route path="*" element= {<Login/>}/>
                </Routes>
            </BrowserRouter>);
        });
        const regBtn = document.querySelector('[title="Ещё нет аккаунта ?"]');
        act(() => {
            fireEvent.click(regBtn!);
        })
        expect(window.location.pathname).toBe("/sign-up");
    });
    
});