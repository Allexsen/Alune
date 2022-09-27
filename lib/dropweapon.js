export function drop(weaponName) {
    const weaponClass = document.getElementById(weaponName).className
    document.querySelector('.' + weaponClass).className = 'pos6'

    const pos = ['pos1', 'pos2', 'pos3', 'pos4', 'pos5', 'pos6']
    for (let c = parseInt(weaponClass[3]); c < 6; c++)
        document.querySelector('.' + pos[c]).className = pos[c - 1]
}
