for i in out*
do
	    mv "$i" "`echo $i | sed 's/out-//'`"
    done
