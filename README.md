# ⏱️ Stopwatch App

A simple and responsive Stopwatch application built with **React** using **Hooks** (`useState`, `useEffect`, and `useRef`).

The stopwatch supports:

- Start
- Stop
- Reset
- Accurate time tracking using `Date.now()`
- Millisecond precision (displayed in centiseconds)

---

## Features

- Start the stopwatch from zero.
- Pause and resume without losing elapsed time.
- Reset the stopwatch back to `00:00:00`.
- Real-time updates every 10 milliseconds.
- Built using modern React functional components and hooks.

---

## Technologies Used

- React
- JavaScript (ES6+)
- CSS
- React Hooks
  - `useState`
  - `useEffect`
  - `useRef`

---

## Project Structure

```text
src/
├── components/
│   └── Stopwatch.jsx
├── App.jsx
├── index.css
└── main.jsx
```

---

## How It Works

### State Management

#### `isRunning`

Tracks whether the stopwatch is currently running.

```javascript
const [isRunning, setIsRunning] = useState(false);
```

#### `elapsedTime`

Stores the elapsed time in milliseconds.

```javascript
const [elapsedTime, setElapsedTime] = useState(0);
```

---

### References

#### `intervalIdRef`

Stores the interval ID so it can be cleared when stopping the stopwatch.

```javascript
const intervalIdRef = useRef(null);
```

#### `startTimeRef`

Stores the timestamp when the stopwatch starts.

```javascript
const startTimeRef = useRef(0);
```

---

### Timer Logic

When the stopwatch starts, an interval updates the elapsed time every 10ms.

```javascript
setElapsedTime(Date.now() - startTimeRef.current);
```

This approach prevents timing drift and keeps the stopwatch accurate.

---

### Start Function

```javascript
const start = () => {
  if (!isRunning) {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }
};
```

Supports resuming from a paused state by preserving previously elapsed time.

---

### Stop Function

```javascript
const stop = () => {
  setIsRunning(false);
};
```

Stops the timer while preserving the current elapsed time.

---

### Reset Function

```javascript
const reset = () => {
  setElapsedTime(0);
  setIsRunning(false);
};
```

Resets the stopwatch to its initial state.

---

## Time Format

The displayed time follows this format:

```text
MM:SS:CS
```

Where:

- MM = Minutes
- SS = Seconds
- CS = Centiseconds (1/100th of a second)

Example:

```text
01:25:37
```

Means:

- 1 Minute
- 25 Seconds
- 37 Centiseconds

---

## Installation

Clone the repository:

```bash
git clone https://github.com/mdk4if/reactStopwatch.git
```

Navigate into the project:

```bash
cd react-stopwatch
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```
