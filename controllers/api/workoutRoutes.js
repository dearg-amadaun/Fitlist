const router = require('express').Router();
const { User, Workout } = require('../../models');

router.post('/', (req, res) => { // post route for Creating new workout
	Workout.create({
        //stuff!
	}).then(workoutData => res.json(workoutData)).catch(err => {
		console.log(err);
		res.status(500).json(err);
	});
});

router.delete('/:id', async (req, res) => { //Delete route to delete a workout
	try {
		const WorkoutData = await Workout.destroy({
			where: {id: req.params.id}
		});
		if (!WorkoutData) {
			res.status(404).json({ message: 'No Workout found with this id!'});
			return;
		}
		res.status(200).json(WorkoutData);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.put('/:id', async (req, res) => { // put Route to update workout
	try {
		const workout = await Workout.update({
                // Stuff!
		}, { where: { id: req.params.id } });
		res.status(200).json(workout);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;