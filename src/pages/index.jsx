import React, { Component } from 'react';
import Image from 'next/image';
import styles from '../styles/index.module.scss';
import Link from 'next/link';

/*
landing page:
  need to replace buttons with links
;
*/
export default function Index() {
  return (
    <div class={styles.body}>
      <nav class={styles.nav_bar}>
        <Image
          src="/Vector.svg"
          width={40}
          height={40}
          alt=""
          class={styles.logo}
        ></Image>
        <h1 class={styles.brand}>include</h1>
        <ul class={`${styles.list} ${styles.nav_links}`}>
          <li>Home</li>
          <li>Workshops</li>
          <li>Resources</li>
        </ul>
      </nav>
      <h1 class={styles.hero}>
        Welcome developers to the 2023-2024 Technical Cohort!
      </h1>
      <div class={styles.workshops}>
        <div class={styles.workshop}>
          <h2>Workshop #1: Initial Set Up</h2>
          <ul class={styles.learningGoals}>
            <li>How The Internet Works</li>
            <li>Overview of Web Development</li>
            <li>Workspace Set Up</li>
            <li>Basic HTML & CSS</li>
          </ul>
          <button class={styles.btn}>Get Started</button>
        </div>
        <div class={styles.workshop}>
          <h2>Workshop #2: Intro to HTML and CSS</h2>
          <ul class={styles.learningGoals}>
            <li>Box Model</li>
            <li>Flexbox</li>
            <li>Responsiveness</li>
            <li>Media Queries</li>
            <li>Positioning</li>
          </ul>
          <button class={styles.btn}>Get Started</button>
        </div>
        <div class={styles.workshop}>
          <h2>Workshop #3: Javascript + Next.js Frontend</h2>
          <ul class={styles.learningGoals}>
            <li>Coming Soon</li>
          </ul>
          <button class={styles.btn}>Get Started</button>
        </div>
        <div class={styles.workshop}>
          <h2>Workshop #4: Next.js Backend</h2>
          <ul class={styles.learningGoals}>
            <li>Coming Soon</li>
          </ul>
          <button class={styles.btn}>Get Started</button>
        </div>
        <div class={styles.workshop}>
          <h2>Workshop #5: TBD</h2>
          <ul class={styles.learningGoals}>
            <li>TBD</li>
          </ul>
          <button class={styles.btn}>Get Started</button>
        </div>
      </div>
    </div>
  );
}