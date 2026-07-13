import sympy as sp

x, h = sp.symbols('x h')
ok = True
def check(name, got, want):
    global ok
    good = sp.simplify(got - want) == 0
    ok = ok and good
    print(('OK ' if good else 'FAIL'), name, '->', got, ('==' if good else '!='), want)

# Tangent lesson: f(x)=x^2-3x
f = x**2 - 3*x
fp = sp.diff(f, x)
check('f\'(2)=1', fp.subs(x, 2), 1)
check('f(2)=-2', f.subs(x, 2), -2)
# tangent line y = f'(2)(x-2)+f(2) simplifies to x-4
tangent = fp.subs(x, 2)*(x-2) + f.subs(x, 2)
check('tangent = x-4', sp.expand(tangent), x-4)
# secant slope (f(2+h)-f(2))/h simplifies to h+1
secant = sp.simplify((f.subs(x, 2+h) - f.subs(x, 2))/h)
check('secant = h+1', secant, h+1)
# mini question: y=x^2 slope at x=3 is 6
check('mini slope = 6', sp.diff(x**2, x).subs(x, 3), 6)

# Complex: z=-sqrt(3)+i -> 2(cos(5pi/6)+i sin(5pi/6))
z = 2*(sp.cos(sp.Rational(5,6)*sp.pi) + sp.I*sp.sin(sp.Rational(5,6)*sp.pi))
check('trig form = -sqrt3+i', sp.simplify(z), -sp.sqrt(3) + sp.I)
check('modulus = 2', sp.Abs(-sp.sqrt(3)+sp.I), 2)

# Area under y=4x(3-x) from 0..3
area = sp.integrate(4*x*(3-x), (x, 0, 3))
check('area parabola = 18', area, 18)
# Area between y=2x and y=x^2
area2 = sp.integrate(2*x - x**2, (x, 0, 2))
check('area between = 4/3', area2, sp.Rational(4,3))
# Volume revolve sqrt(x) 0..4 (referenced in guide)
vol = sp.pi*sp.integrate((sp.sqrt(x))**2, (x, 0, 4))
check('volume = 8pi', vol, 8*sp.pi)

# --- interactive demo facts ---
check('demo integral x^2 0..3 = 9', sp.integrate(x**2, (x, 0, 3)), 9)
check("demo (e^x)' = e^x", sp.diff(sp.exp(x), x), sp.exp(x))
check('demo asymptote = 2', sp.limit((2*x+1)/(x-1), x, sp.oo), 2)
check('demo ln2+ln3 = ln6', sp.log(2)+sp.log(3), sp.log(6))
check("demo (x^2-2)' = 2x", sp.diff(x**2-2, x), 2*x)
n_, p_ = 10, sp.Rational(2, 5)
check('demo E(X)=np=4', n_*p_, 4)
check('demo V(X)=np(1-p)=12/5', n_*p_*(1-p_), sp.Rational(12, 5))

print('\nALL PASS' if ok else '\nSOME FAILED')
