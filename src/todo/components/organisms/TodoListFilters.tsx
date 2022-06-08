import { SetterOrUpdater } from 'recoil';

interface Props {
	setFilter: SetterOrUpdater<string>;
}

const TodoListFilters = ({ setFilter }: Props) => {
	const updateFilter = (filter: string) => {
		setFilter(filter);
	};

	return (
		<div className={'dropdown dropdown-right'}>
			<label tabIndex={0} className="btn btn-ghost btn-xs">
				Filter
			</label>
			<ul
				tabIndex={0}
				className="dropdown-content menu rounded-box w-40 bg-base-100 p-2 shadow"
			>
				<li>
					<button type="button" onClick={() => updateFilter('Show All')}>
						All
					</button>
				</li>
				<li>
					<button type="button" onClick={() => updateFilter('Show Done')}>
						Done
					</button>
				</li>
				<li>
					<button type="button" onClick={() => updateFilter('Show Undone')}>
						Undone
					</button>
				</li>
			</ul>
		</div>
	);
};

export default TodoListFilters;
