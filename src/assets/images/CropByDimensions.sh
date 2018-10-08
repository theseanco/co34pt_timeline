for i in *jpg
	  do convert "$i" -geometry 1200x1200^ -gravity center -crop 1200x1200+0+0 out-"$i"
done
