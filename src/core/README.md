# Interfaces

**State**

- active
- currendRound
- currendRoundTime
- currendRoundRepition
- currendExercise
- currendExerciseTime
- TBD

**Workout**

This is the interface for the main component workout. 
It is the only component with method to handle the workout.

Attributes: 
- workout: Workout model
- state: Stores the current state as an object

Methods:
- start(): It should be possible to start a workout
- stop(): It should be possible to stop a workout 
- pause(): It should be possible to pause a workout
- nextExercise(): Go to the next exercise
- previousExercise(): Go to the previous exercise

# Models

**Workout**

This is the interface for the main component workout. 
It is the only component with method to handle the workout.

Attributes: 
- name: Descripes the name of a workout
- rounds: Every workout has n rounds 

**Round**

Attributes
- quantity: Quantity of rounds 
- exercises: Stores the exercises for the round 
- duration: In case of amrap 

**Exercise**

Attributes
- name: Name of the exercise
- duration: Duration of the timebased exercise
- repetition: Quanitity of repetition 

