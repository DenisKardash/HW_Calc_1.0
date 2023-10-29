import React from 'react';
import { useState } from 'react';
import styles from './App.module.css';

let resultToRed = false;

export const App = () => {
	const buttonsArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

	const [inputNumber, setInputNumber] = useState('');

	const calculate = (arr) => {
		if (arr[1] === '+') {
			return Number(arr[0]) + Number(arr[2]);
		} else if (arr[1] === '-') {
			return Number(arr[0]) - Number(arr[2]);
		}
	};	

	const result = (string) => {
		const resultArr = string.replaceAll('+', ' + ').replaceAll('-', ' - ').split(' ');
		if (resultArr.length === 3) {
		return calculate(resultArr);
		} else {
			return 'ошибка ввода'
		}
	};

	const onClick = (clickBtn) => {
		if (clickBtn === '=') {
			setInputNumber(result(inputNumber))
			resultToRed = true;
		} else if (clickBtn) {
			setInputNumber(inputNumber + clickBtn);
			resultToRed = false;
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.output}>
				<input
					type="text"
					className={resultToRed ? styles.isResult : styles.viewArea}
					defaultValue={inputNumber}
				/>
			</div>
			<div className={styles.buttonsArea}>
				{buttonsArr.map((item) => (
					<button key={item} onClick={() => onClick(item)}>
						{item}
					</button>
				))}
				<button className={styles.operator} onClick={() => onClick('+')}>
					+
				</button>
				<button className={styles.operator} onClick={() => onClick('-')}>
					-
				</button>
				<button className={styles.clear} onClick={() => setInputNumber('')}>
					C
				</button>
				<button className={styles.result} onClick={() => onClick('=')}>
					=
				</button>
			</div>
		</div>
	);
};

// import React from 'react';
// import { useState } from 'react';
// import styles from './App2.module.css';

// let resultToRed = false;

// export const App = () => {
// 	const buttonsArr = [
// 		'1',
// 		'2',
// 		'3',
// 		'4',
// 		'5',
// 		'6',
// 		'7',
// 		'8',
// 		'9',
// 		'0',
// 		'+',
// 		'-',
// 		'C',
// 		'=',
// 	];
// 	const [inputNumber, setInputNumber] = useState('');

// 	const calculate = (arr) => {
// 		if (arr[1] === '+') {
// 			return Number(arr[0]) + Number(arr[2]);
// 		} else if (arr[1] === '-') {
// 			return Number(arr[0]) - Number(arr[2]);
// 		}
// 	};

// 	const result = (string) => {
// 		const resultArr = string.replaceAll('+', ' + ').replaceAll('-', ' - ').split(' ');
// 		if (resultArr.length === 3) {
// 			return calculate(resultArr);
// 		} else {
// 			return 'ошибка ввода';
// 		}
// 	};

// 	const onClick = (clickBtn) => {
// 		if (clickBtn === '=') {
// 			setInputNumber(result(inputNumber));
// 			resultToRed = true;
// 		} else if (clickBtn === 'C') {
// 			setInputNumber('');
// 		} else if (clickBtn) {
// 			setInputNumber(inputNumber + clickBtn);
// 			resultToRed = false;
// 		}
// 	};

// 	return (
// 		<div className={styles.container}>
// 			<div className={styles.output}>
// 				<input
// 					type="text"
// 					className={resultToRed ? styles.isResult : styles.viewArea}
// 					defaultValue={inputNumber}
// 				/>
// 			</div>
// 			<div className={styles.buttonsArea}>
// 				{buttonsArr.map((item) => (
// 					<button
// 						key={item}
// 						className={`${styles.btn} ${styles[item]}`}
// 						onClick={() => onClick(item)}
// 					>
// 						{item}
// 					</button>
// 				))}
// 			</div>
// 		</div>
// 	);
// };
