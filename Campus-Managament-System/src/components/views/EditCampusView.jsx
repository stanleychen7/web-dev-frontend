import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import React, { useState, useEffect } from 'react';

const useStyles = makeStyles({
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 400,
        margin: '40px auto',
        padding: 24,
        background: '#fafafa',
        borderRadius: 8,
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    },
    formField: {
        marginBottom: 20,
    },
    required: {
        color: '#d32f2f',
        marginLeft: 4,
    },
    submitButton: {
        marginTop: 16,
        background: '#1976d2',
        color: '#fff',
        '&:hover': {
            background: '#1565c0',
        },
    },
    errorText: {
        color: '#d32f2f',
        fontSize: 13,
        marginTop: 4,
    },
});

const EditCampusView = ({ campus, onSubmit }) => {
    const classes = useStyles();
    const [form, setForm] = useState({
        name: '',
        address: '',
        description: '',
        imageUrl: '',
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (campus?.id) {
            setForm({
                name: campus.name || '',
                address: campus.address || '',
                description: campus.description || '',
                imageUrl: campus.imageUrl || '',
            });
        }
    }, [campus]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const validate = () => {
        let temp = {};
        if (!form.name.trim()) temp.name = 'Campus name is required';
        if (!form.address.trim()) temp.address = 'Address is required';
        setErrors(temp);
        return Object.keys(temp).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            if (onSubmit) onSubmit(form);
        }
    };

    if (!campus) return <p>Loading campus data...</p>;

    return (
        <form className={classes.formContainer} onSubmit={handleSubmit} noValidate>
            <Typography variant="h5" gutterBottom>
                Edit Campus
            </Typography>
            <div className={classes.formField}>
                <label>
                    Name
                    <span className={classes.required}>*</span>
                </label>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    style={{ width: '100%', padding: 8, marginTop: 4 }}
                />
                {errors.name && (
                    <div className={classes.errorText}>{errors.name}</div>
                )}
            </div>
            <div className={classes.formField}>
                <label>
                    Address
                    <span className={classes.required}>*</span>
                </label>
                <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    style={{ width: '100%', padding: 8, marginTop: 4 }}
                />
                {errors.address && (
                    <div className={classes.errorText}>{errors.address}</div>
                )}
            </div>
            <div className={classes.formField}>
                <label>Description</label>
                <input
                    type="text"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    style={{ width: '100%', padding: 8, marginTop: 4 }}
                />
            </div>
            <div className={classes.formField}>
                <label>Image URL</label>
                <input
                    type="text"
                    name="imageUrl"
                    value={form.imageUrl}
                    onChange={handleChange}
                    style={{ width: '100%', padding: 8, marginTop: 4 }}
                />
            </div>
            <Button
                type="submit"
                variant="contained"
                className={classes.submitButton}
            >
                Save Changes
            </Button>
        </form>
    );
};

export default EditCampusView;