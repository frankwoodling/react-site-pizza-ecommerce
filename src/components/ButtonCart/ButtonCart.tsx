import React from 'react';
import Button from '@material-ui/core/Button';

const style = {
    color: 'white',
    background: '#f04a3c',
    boxShadow: 'none',
    borderRadius: 50
}

const ButtonCart: React.FC = () => {
    return (
            <Button
                style={style}
                size="large"
                variant="raised">
            Add to Cart
            </Button>
    )

}

export { ButtonCart };