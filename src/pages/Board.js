import React from 'react';
import './Board.css';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Board = () => {
  return (
    <Layout backgroundImage={require('../assets/intros/boardpic.webp')}>
          <h1>Board Members</h1>
          <p>PLING is electing a brand new leadership board in early fall of 2024/25! The link below will take you to an application form to fill or recommend to someone you think would be a great candidate.</p>
          <p>The sign-up closes on Wednesday 09/25/2024 and the election will be held online on Friday 09/27/2024. All eligible voters will receive the details on how to vote via email. Only registered members and those directly affiliated with the Department of Linguistics at the University of Pennsylvania are eligible to cast their vote.</p>
          <Link to="https://forms.gle/gS21BQ931TL4snbb9" className="apply-button">Apply Here!</Link>
    </Layout>
  );
};

export default Board;
