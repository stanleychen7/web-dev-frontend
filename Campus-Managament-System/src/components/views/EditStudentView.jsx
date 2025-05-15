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

const EditStudentView = ({ student, onSubmit }) => {
    const classes = useStyles();
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        imageUrl: '',
        gpa: '',
        campusId: '',
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (student?.id) {
            setForm({
                firstName: student.firstName || '',
                lastName: student.lastName || '',
                email: student.email || '',
                imageUrl: student.imageUrl || '',
                gpa: student.gpa !== undefined && student.gpa !== null ? String(student.gpa) : '',
                campusId: student.campusId ? String(student.campusId) : '',
            });
        }
    }, [student]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const validate = () => {
        let temp = {};
        if (!form.firstName.trim()) temp.firstName = 'First name is required';
        if (!form.lastName.trim()) temp.lastName = 'Last name is required';
        if (!form.email.trim()) temp.email = 'Email is required';
        setErrors(temp);
        return Object.keys(temp).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            if (onSubmit) onSubmit(form);
        }
    };

    if (!student) return <p>Loading student data...</p>;

    return (
        <form className={classes.formContainer} onSubmit={handleSubmit} noValidate>
            <Typography variant="h5" gutterBottom>
                Edit Student
            </Typography>
            <div className={classes.formField}>
                <label>
                    First Name
                    <span className={classes.required}>*</span>
                </label>
                <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    style={{ width: '100%', padding: 8, marginTop: 4 }}
                />
                {errors.firstName && (
                    <div className={classes.errorText}>{errors.firstName}</div>
                )}
            </div>
            <div className={classes.formField}>
                <label>
                    Last Name
                    <span className={classes.required}>*</span>
                </label>
                <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    style={{ width: '100%', padding: 8, marginTop: 4 }}
                />
                {errors.lastName && (
                    <div className={classes.errorText}>{errors.lastName}</div>
                )}
            </div>
            <div className={classes.formField}>
                <label>
                    Email
                    <span className={classes.required}>*</span>
                </label>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    style={{ width: '100%', padding: 8, marginTop: 4 }}
                />
                {errors.email && (
                    <div className={classes.errorText}>{errors.email}</div>
                )}
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
            <div className={classes.formField}>
                <label>GPA</label>
                <input
                    type="number"
                    name="gpa"
                    value={form.gpa}
                    onChange={handleChange}
                    min="0"
                    max="4"
                    step="0.01"
                    style={{ width: '100%', padding: 8, marginTop: 4 }}
                />
            </div>
            <div className={classes.formField}>
                <label>Campus ID</label>
                <input
                    type="text"
                    name="campusId"
                    value={form.campusId}
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

export default EditStudentView;