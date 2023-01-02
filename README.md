# workout

A mobile first webapp to create your own workouts with markdown files and more. 

---

## components

- user interface
- markdown-converter
- core 

---

# core - components

- App
- WorkoutState

---

# core - entities

**Exerise**

**TimeExercise <- Exerise**
- time

**RepsExercise <- Exerise**
- reps

**Round**
- cycle
- Exercise[]

**Workout**
- time // amrap
- Round
