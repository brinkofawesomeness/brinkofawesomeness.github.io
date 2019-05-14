// conner brinkley
// lab 6 – quicksort

#include <iostream>
#include <cstdio>
#include <vector>
using namespace std;


// print current state of vector
void printState(char letter, int start, int size, int pIndex, vector <double> &v) {

	int i;

	printf("%c: %5d %5d  ", letter, start, size);

	if (letter == 'P') printf("%4d", pIndex);
	else if (letter == 'M') printf("%4.2f", v.at(start));
	else printf("    ");

	for (i = 0; i < v.size(); i++) {
		printf("%5.2f", v.at(i));
	}
	printf("\n");

}


// quicksort
void recursive_sort(vector <double> &v, int start, int size, int print) {

	int L, R;
	int first, last, mid;
	int pivot_index;
	double pivot;
	double temp;
	bool sorting = true;

	// base case, if vector size is 0 or 1, return
	if (size == 0 || size == 1) return;	

	// print current state, since we know size is greater than 1 at this point
	printState('S', start, size, 0, v);

	// base case, if vector size is 2, sort
	if (size == 2) {

		// if first element is greater, swap
		if (v.at(start) > v.at(start + 1)) {
			temp = v.at(start);
			v.at(start) = v.at(start + 1);
			v.at(start + 1) = temp;
		}

		return;
	}

	// first calculate pivots
	first = start;
	last = start + size - 1;
	mid = start + (size / 2);

	// find median pivot
	if ( v.at(last) <= v.at(first) && v.at(first) <= v.at(mid) || v.at(mid) <= v.at(first) && v.at(first) <= v.at(last) ) {
		pivot_index = first;
	}
	else if ( v.at(first) <= v.at(last) && v.at(last) <= v.at(mid) || v.at(mid) <= v.at(last) && v.at(last) <= v.at(first) ) {
		pivot_index = last;
	}
	else {
		pivot_index = mid;
	}

	// swap pivot with first element
	temp = v.at(start);
	v.at(start) = v.at(pivot_index);
	v.at(pivot_index) = temp;

	// print after finding pivot
	printState('M', start, size, 0, v);

	// find pivot value
	pivot = v.at(start);

	// calculate left and right pointers
	L = start + 1;
	R = start + size - 1;

	// start sorting
	while (sorting) {

		// increment left pointer until it points to element >= pivot (or to v[start+size])
		while (v.at(L) < pivot && L <= (start+size-1)) {
			L++;
		}

		// decrement right pointer until it points to element <= pivot (or to v[start])
		while (v.at(R) > pivot && R > start) {
			R--;
		}

		// determine if we're done (L >= R)
		if (L >= R) sorting = false;

		// else, swap v[L] and v[R], increment L, and decrement R
		else {
			temp = v.at(L);
			v.at(L) = v.at(R);
			v.at(R) = temp;

			L++;
			R--;
		}
	}

	// swap pivot with last element of left set
	temp = v.at(start);
	v.at(start) = v.at(R);
	v.at(R) = temp;

	pivot_index = R;

	// print after partitioning around pivot
	printState('P', start, size, pivot_index, v);

	// recursively sort left and right sets, excluding pivot, since it is already in the right place
	recursive_sort(v, start, (pivot_index - start), print);
	recursive_sort(v, (pivot_index + 1), (size - (pivot_index - start) - 1), print);

	return;
}


// implementation of function in sorting.h
void sort_doubles(vector <double> &v, int print) {

	int i;
	int size = v.size();

	// call recursive sort
	recursive_sort(v, 0, size, print);

	// print the resulting vector
	printf("                    ");
	for (i = 0; i < v.size(); i++) {
		printf("%5.2f", v.at(i));
	}
	printf("\n");
}
