
```shell
npm install nextprot-cli
```

### Gets a protein sequence
```shell
./node_modules/nextprot-cli/examples/get-protein-sequence.js
# Will print out

MALWMRLLPLLALLALWGPDPAAAFVNQHLCGSHLVEALYLVCGERGFFYTPKTRREAEDLQVGQVELGGGPGAGSLQPLALEGSLQKRGIVEQCCTSICSLYQLENYCN
```

### Gets the list of proteins who have a gene expressed on a chromosome (passed as argument)
```shell
node ./node_modules/nextprot-cli/examples/get-proteins-by-chromosome.js Y

Querying chromosome Y
Found 48 entries:
NX_Q9BY66,NX_Q9BQ87,NX_Q9BZA8,NX_Q99218,NX_Q9Y6F7,NX_Q9BZA5,NX_Q96LI6,NX_Q9Y6F8,NX_Q9H606,NX_Q9BZ97,NX_Q9NR90,NX_Q9NQZ3,NX_Q9BZA0,NX_Q9BZ98,NX_Q8TD47,NX_P08048,NX_O43930,NX_P22090,NX_Q8NFZ3,NX_Q15415,NX_Q8IUE0,NX_Q05066,NX_P25063,NX_Q86SG3,NX_Q13117,NX_Q8N888,NX_P0CV98,NX_P0CW00,NX_P0CV99,NX_P0DJD3,NX_P0CW01,NX_P0C7P1,NX_Q01534,NX_P0DJD4,NX_O15523,NX_O00507,NX_O14598,NX_O14604,NX_A6NKD2,NX_O14603,NX_A6NJY1,NX_O14599,NX_O14607,NX_O14602,NX_A6NEQ0,NX_A6NDE4,NX_A2RUG3,NX_O14609

```


### Gets the name and the different locations of a protein accession passed as argument 

```shell
node ./node_modules/nextprot-cli/examples/get-tissues-for-entry.js NX_P51587

Querying cellular components for Breast cancer type 2 susceptibility protein (BRCA2) [NX_P51587]:

BRCA2-MAGE-D1 complex
Centrosome
Cytoplasm
Cytoskeleton
Microtubule organizing center
Nucleoplasm
Nucleus
cell
cell part
cellular_component
centrosome
cytoplasm
cytoplasmic membrane-bounded vesicle
cytoplasmic part
cytoplasmic vesicle
cytoskeletal part
cytoskeleton
endomembrane system
intracellular
intracellular membrane-bounded organelle
intracellular non-membrane-bounded organelle
intracellular organelle
intracellular organelle lumen
intracellular organelle part
intracellular part
macromolecular complex
membrane-bounded organelle
membrane-bounded vesicle
membrane-enclosed lumen
microtubule cytoskeleton
microtubule organizing center
non-membrane-bounded organelle
nuclear lumen
nuclear part
nucleoplasm
nucleus
organelle
organelle lumen
organelle part
protein complex
secretory granule
vesicle

```
