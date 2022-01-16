/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';

import {
    ButtonRegister, Container, Nav, NormalButtonNav,
} from './styles';

export function Header() {
    const router = useHistory();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    function scrollToTop(location: string) {
        window.scrollTo({
            top: document.getElementById(location)!.offsetTop,
            behavior: 'smooth',
        });
    }

    function scrollToTopAndCloseMenuBurguer(location: string) {
        handleClose();
        window.scrollTo({
            top: document.getElementById(location)!.offsetTop,
            behavior: 'smooth',
        });
    }

    return (
        <Container>
            <h1>Healthy Food</h1>
            <Nav>
                <div>
                    <NormalButtonNav onClick={() => scrollToTop('recipes')}>
                        HEALTHY RECIPES
                    </NormalButtonNav>
                    <NormalButtonNav onClick={() => scrollToTop('blog')} type="button">
                        BLOG
                    </NormalButtonNav>
                    <NormalButtonNav onClick={() => scrollToTop('join')} type="button">
                        JOIN
                    </NormalButtonNav>
                    <ButtonRegister
                        type="button"
                        onClick={() => {
                            router.push('/register');
                        }}
                    >
                        REGISTER
                    </ButtonRegister>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        {open ? (
                            <AiOutlineClose color="#badc58" size={18} />
                        ) : (
                            <FiMenu color="#badc58" size={18} />
                        )}
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={() => scrollToTopAndCloseMenuBurguer('join')}>
                            JOIN
                        </MenuItem>
                        <MenuItem onClick={() => scrollToTopAndCloseMenuBurguer('blog')}>
                            BLOG
                        </MenuItem>
                        <MenuItem onClick={() => scrollToTopAndCloseMenuBurguer('recipes')}>
                            HEALTHY RECIPES
                        </MenuItem>
                    </Menu>
                </div>
            </Nav>
        </Container>
    );
}
