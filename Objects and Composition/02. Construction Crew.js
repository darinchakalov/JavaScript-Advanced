function solve(obj) {
    if (obj.dizziness === true) {
        obj.levelOfHydrated += 0.1 * obj.weight * obj.experience;
        obj.dizziness = false;
    }
    return obj;
}
solve({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true });
