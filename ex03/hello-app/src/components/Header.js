import React from 'react';
import styled from 'styled-components';

const MyUl = styled.ul`
    color: green;
    font-size: 30px;
    list-style-type: none;
    display: flex;
`;
function Header() {
    return (
        <div>
            <div>
                <MyUl>
                    <li>홈</li>
                    <li>글쓰기</li>
                    <li>로그아웃</li>
                </MyUl>
            </div>
        </div>
    );
}

export default Header;