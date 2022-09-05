import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import StudentList from './component/studentList';
import ProfileCard from './component/profileCard';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<ProfileCard />)
