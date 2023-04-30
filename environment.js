import * as THREE from 'three';

export default class Env{
    constructor(scene, start, end){
        this.scene = scene;
        this.start = start;
        this.end = end;

        // const loader = new GLTFLoader();
        // loader.load('./3d_models/collision-world.glb', (gltf) => {
        //     this.model = gltf;
        //     gltf.scene.position.set(-10, 0, 0);
        //     gltf.scene.scale.set(5, 5, 5);
        //     // console.log(gltf.scene.children[0]);
        //     gltf.scene.children[0].material.transparent = true;
        //     gltf.scene.traverse(child => {
        //         if (child.isMesh){
        //             // console.log(child);
        //         }
        //     })
        // });
        const plane_geom = new THREE.PlaneGeometry(1000, 1000);
        plane_geom.rotateX(-Math.PI / 2)
        const plane_mat = new THREE.MeshMatcapMaterial({color: 0x967b00});
        const plane_mesh = new THREE.Mesh(plane_geom, plane_mat);
        plane_mesh.position.y -= 50;
        this.scene.add(plane_mesh)

        const color = new THREE.Color();
        const temp = new THREE.Object3D();

        let box_geom = new THREE.BoxGeometry(0.25, 0.25, 0.25)
        const se_mat = new THREE.MeshMatcapMaterial({
            color: 'white'
        })
        let mesh = new THREE.InstancedMesh(box_geom, se_mat, 2);
        temp.position.set(this.start[0], this.start[1], this.start[1])
        temp.updateMatrix();
        mesh.setMatrixAt(0, temp.matrix);
        mesh.setColorAt(0, color.setHex(0x00FF00));
        temp.position.set(this.end[0], this.end[1], this.end[2])
        temp.updateMatrix();
        mesh.setMatrixAt(1, temp.matrix);
        mesh.setColorAt(1, color.setHex(0xFF0000));
        this.seMesh = mesh;
        this.scene.add(mesh);
    }
    initGeometry(mapName){
        if(mapName == "New Random Cubes"){
            this.NewRandomCubes();
        }
        else if(mapName == "Structured Cubes"){
            this.StructuredCubes();
        }
        return [this.instancedMesh, this.obstacles]
    }
    NewRandomCubes(){
        const box_geom = new THREE.BoxGeometry(1, 1, 1);
        const obs_mat = new THREE.MeshMatcapMaterial({
            color: 'white', transparent: true
        })
        const mesh = new THREE.InstancedMesh(box_geom, obs_mat, 3800);
        const color = new THREE.Color();
        const temp = new THREE.Object3D();

        let obstacles = [];
        for(let i=0; i<3800; i++){
            temp.position.set(Math.floor(Math.random() * 50), Math.floor(Math.random() * 20), Math.floor(Math.random() * 50));
            if (temp.position.x === this.start[0] && temp.position.y == this.start[1] && temp.position.z == this.start[2]){
                continue;
            }
            if (temp.position.x === this.end[0] && temp.position.y == this.end[1] && temp.position.z == this.end[2]){
                continue;
            }
            temp.updateMatrix();
            obstacles.push([temp.position.x, temp.position.y, temp.position.z]);
            temp.position.set(temp.position.x + 0.5, temp.position.y + 0.5, temp.position.z + 0.5);
            temp.updateMatrix();
            mesh.setMatrixAt(i, temp.matrix);
            mesh.setColorAt(i, color.setHex(0xFFFFFF));
        }
        
        this.scene.add(mesh);
        this.instancedMesh = mesh;
        this.obstacles = obstacles;
    }
    Random(mapName){
        const obj = localStorage.getItem(mapName);
        const obstacles = JSON.parse(obj);
        const box_geom = new THREE.BoxGeometry(1, 1, 1);
        const obs_mat = new THREE.MeshMatcapMaterial({
            color: 'white', transparent: true
        })
        const mesh = new THREE.InstancedMesh(box_geom, obs_mat, 3800);
        const color = new THREE.Color();
        const temp = new THREE.Object3D();

        for(const [i, obstacle] of obstacles.entries()){
            temp.position.set(obstacle[0], obstacle[1], obstacle[2]);
            if (temp.position.x === this.start[0] && temp.position.y == this.start[1] && temp.position.z == this.start[2]){
                continue;
            }
            if (temp.position.x === this.end[0] && temp.position.y == this.end[1] && temp.position.z == this.end[2]){
                continue;
            }
            temp.updateMatrix();
            temp.position.set(temp.position.x + 0.5, temp.position.y + 0.5, temp.position.z + 0.5);
            temp.updateMatrix();
            mesh.setMatrixAt(i, temp.matrix);
            mesh.setColorAt(i, color.setHex(0xFFFFFF));
        }
        this.scene.add(mesh);
        this.instancedMesh = mesh;
        this.obstacles = obstacles;
    }
    StructuredCubes(){
        const box_geom = new THREE.BoxGeometry(1, 1, 1);
        const obs_mat = new THREE.MeshMatcapMaterial({
            color: 'white', transparent: true
        })
        const mesh = new THREE.InstancedMesh(box_geom, obs_mat, 2000);
        const color = new THREE.Color();
        const temp = new THREE.Object3D();

        let obstacles = [];
        let count = 0;
        for(let i=0; i<13; i++){
            for(let j=0; j<50; j++){
                temp.position.set(j, i, 20);
                temp.updateMatrix();
                obstacles.push([temp.position.x, temp.position.y, temp.position.z]);
                temp.position.set(temp.position.x + 0.5, temp.position.y + 0.5, temp.position.z + 0.5);
                temp.updateMatrix();
                mesh.setMatrixAt(count, temp.matrix);
                mesh.setColorAt(count, color.setHex(0xFFFFFF));
                count++;
            }
        }
        for(let i=7; i<20; i++){
            for(let j=0; j<50; j++){
                temp.position.set(j, i, 30);
                temp.updateMatrix();
                obstacles.push([temp.position.x, temp.position.y, temp.position.z]);
                temp.position.set(temp.position.x + 0.5, temp.position.y + 0.5, temp.position.z + 0.5);
                temp.updateMatrix();
                mesh.setMatrixAt(count, temp.matrix);
                mesh.setColorAt(count, color.setHex(0xFFFFFF));
                count++;
            }
        }
        this.scene.add(mesh);
        this.instancedMesh = mesh;
        this.obstacles = obstacles;
    }
    RealWorld(){
        this.scene.add(this.model.scene);
        this.instancedMesh = this.model.scene.children[0];
        this.obstacles = null;
    }
    getObstacles(){
        this.scene.remove(this.model.scene);
        this.scene.add(this.instancedMesh);
        return [this.instancedMesh, this.obstacles]
    }
    getCollisionWorld(){
        this.scene.remove(this.instancedMesh);
        this.scene.add(this.model.scene);
        return this.model.scene.children[0];
    }
    change_start_end(start, end){
        this.start = start;
        this.end = end;
        const temp = new THREE.Object3D();
        temp.position.set(this.start[0], this.start[1], this.start[1])
        temp.updateMatrix();
        this.seMesh.setMatrixAt(0, temp.matrix);
        this.seMesh.instanceMatrix.needsUpdate = true;
        temp.position.set(this.end[0], this.end[1], this.end[2])
        temp.updateMatrix();
        this.seMesh.setMatrixAt(1, temp.matrix);
        this.seMesh.instanceMatrix.needsUpdate = true;
    }
    dispose_obstacle(){
        this.instancedMesh.geometry.dispose();
        this.instancedMesh.material.dispose();
        this.scene.remove(this.instancedMesh);
    }

}