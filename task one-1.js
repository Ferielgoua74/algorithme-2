ALGORITHM orthogonal_Function
VAR
     v1,v2 : ARRAY_OF INTEGER[3];
    p:=FLOAT;
BEGIN
    write("give vector 1");
    Read(v1);
    write("give vector 2");
    Read(v2);
   p:=Dot_product(v1,v2)
  
   IF (p=0) THEN
       write(vectors are orthogonal)
   ELSE
       write( vectors are not orthogonal)
   END_IF
END
