from networkx.utils.backends import _dispatch

@_dispatch
def is_distance_regular(G): ...
@_dispatch
def global_parameters(b, c): ...
@_dispatch
def intersection_array(G): ...
@_dispatch
def is_strongly_regular(G): ...