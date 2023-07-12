func shipWithinDays(weights []int, days int) int {
	var left, right int
	for _, w := range weights {
		if left < w {
			left = w
		}
		right += w
	}
	return left + sort.Search(right, func(mx int) bool {
		mx += left
		ws, count := 0, 1
		for _, w := range weights {
			ws += w
			if ws > mx {
				ws = w
				count++
			}
		}
		return count <= days
	})
}