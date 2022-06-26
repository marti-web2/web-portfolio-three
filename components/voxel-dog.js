import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'
import { DogSpinner, DogContainer } from './voxel-dog-loader'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const VoxelDog = () => {

const refContainer = useRef()

return (
  <Box ref={refContainer}>Dog!!!</Box>
)

}

const [scene] = useState(new THREE.Scene())
const [_controls, setControls] = useState()

export default VoxelDog